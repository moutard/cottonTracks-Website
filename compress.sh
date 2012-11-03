#!/bin/bash

# -- GLOBAL VARIABLES MAC ---------------------------------------------------------
GOOGLE_CLOSURE_COMPILER='/Users/rmoutard/src/google_closure_compiler/compiler.jar'
SOURCE_PATH='/Users/rmoutard/src/'
SOURCE_NAME='cottonTracks-Website'
DESTINATION_PATH='/Users/rmoutard/Downloads/'
TAR_NAME='cottonTracks-Website'



# -- PRETREATMENT -------------------------------------------------------------

echo '-------- Start Pretreatment --------'
rm -rf $DESTINATION_PATH$TAR_NAME
echo 'delete'

# Copy the folder to avoid bad surprise
cp -r $SOURCE_PATH$SOURCE_NAME $DESTINATION_PATH$TAR_NAME
#mv $DESTINATION_PATH$SOURCE_NAME $DESTINATION_PATH$TAR_NAME$VERSION
echo 'Source folder has been copied'

# Go to the copy folder
cd $DESTINATION_PATH$TAR_NAME
echo "cd $DESTINATION_PATH$TAR_NAME"
ls
#java -jar /Users/rmoutard/src/google_closure_compiler/compiler.jar --externs ./lib/jquery-1.3.2.externs.js --externs ./lib/class.externs.js 
# -- COMPILE ------------------------------------------------------------------
COMPILE_COMMAND="java -jar $GOOGLE_CLOSURE_COMPILER "
COMPILE_OPTIONS="--language_in=ECMASCRIPT5_STRICT"
COMPILE_OPTIONS="$COMPILE_OPTIONS --compilation_level ADVANCED_OPTIMIZATIONS"
COMPILE_OPTIONS="$COMPILE_OPTIONS --jscomp_off=globalThis"
COMPILE_OPTIONS="$COMPILE_OPTIONS --warning_level DEFAULT"

function generateMultipleMinFile {
  # Use google closure compiler with many files, using --js flag.
  # 2 Parameters
  # Array of input files
  declare -a INPUT_FILES=("${!1}")
	
  # Name of the output file
  OUTPUT_FILE=$2
  OUTPUT_MIN_FILE=$(echo $OUTPUT_FILE | sed 's/.js/.min.js/')
	
  INPUT_LIST=""
  for file in ${INPUT_FILES[@]}
  do
    INPUT_LIST="$INPUT_LIST --js $file"
  done
  
  EXTERNS="--externs ./lib/jquery-1.3.2.externs.js --externs ./lib/class.externs.js"
  echo "$COMPILE_COMMAND $COMPILE_OPTIONS $INPUT_LIST --js_output_file $OUTPUT_MIN_FILE $EXTERNS"
  $COMPILE_COMMAND $COMPILE_OPTIONS $INPUT_LIST --js_output_file $OUTPUT_MIN_FILE $EXTERNS
  echo "$OUTPUT_MIN_FILE has been generated"

}

function removePath {
  # 2 Parameters
  # Array of input files
  declare -a USELESS_FILES=("${!1}")

  # Name of the output file
  INPUT_FILE=$2

  for filename in ${USELESS_FILES[@]}
  do
    # remove ./ and escape meta characters.
    #pattern=$(echo ${filename:2} | sed 's/\([[\/.*]\|\]\)/\\&/g')
    pattern=$(echo ${filename:2} | sed 's/[\/&]/\\&/g')
    #echo "$pattern"
    # remove line that insert correponding scripts.
    sed -i '' -e "/$pattern/d" "./$INPUT_FILE"
  done

  echo "Useless files have been removed from $INPUT_FILE"

}

function addPath {
  # 2 Parameters
  # Array of input files
  INCLUDE_FILE=$1

  # Correpondig Tag
  TAG=$2

  # Name of the output file
  INPUT_FILE=$3

  sed -i '' -e "/$TAG/a\\
    <script type='text/javascript' src='$INCLUDE_FILE'></script>
    " "./$INPUT_FILE"

  echo "$INCLUDE_FILE has been added to $INPUT_FILE"

}

# CONTACT
declare -a contact_input_files
contact_input_files=('./javascript/contact.js')

generateMultipleMinFile contact_input_files[@] "contact.js"
removePath contact_input_files[@] 'contact.html'
addPath 'contact.min.js' 'Cotton.contact' 'contact.html'

# TEAM
declare -a team_input_files
team_input_files=('./javascript/team.js')

generateMultipleMinFile team_input_files[@] "team.js"
removePath team_input_files[@] 'team.html'
addPath 'team.min.js' 'Cotton.team' 'team.html'

# INDEX
declare -a index_input_files
index_input_files=('./javascript/index.js')

generateMultipleMinFile index_input_files[@] "index.js"
removePath index_input_files[@] 'index.php'
addPath 'index.min.js' 'Cotton.index' 'index.php'


rm javascript/index.js javascript/team.js javascript/contact.js
rm lib/class.externs.js lib/jquery-1.3.2.externs.js
echo 'end'
exit 1

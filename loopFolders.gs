function loopFolders() 
{  
  var thisFolder = DriveApp.getFolderById('xxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxx'); /*Folder ID*/
  processFolder(thisFolder)
}

function processFolder(folder){
  Logger.log("Folder: " + folder.getName());
  thisFile = folder.getFiles();
  while (thisFile.hasNext()){
  var eachFile = thisFile.next();  
  Logger.log("File: " + eachFile.getName());
  }
  processFolders(folder.getFolders());
}

function processFolders(folders) {
    while (folders.hasNext()) {
      var thisFolder = folders.next()
      processFolder(thisFolder)
      var subFolder = thisFolder.getFolders();
      processFolders(subFolder);          
    }
}

// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract NoteContract {
  event AddNote(address recipient, uint taskId);
  event DeleteNote(uint taskId, bool isDeleted);

  struct Note{
    uint id;
    string noteContent;
    bool isDeleted;
  }

  Note[] private notes;

  // maps each note to a specific user
  mapping(uint256 => address) noteToOwner;

  function addNote(string memory noteContent, bool isDeleted) external {
    uint noteId = notes.length;
    notes.push(Note(noteId, noteContent, isDeleted));
    noteToOwner[noteId] = msg.sender;
    emit AddNote(msg.sender, noteId);
  }

  function getMyNotes() external view returns (Note[] memory) {
    Note[] memory temp  = new Note[](notes.length);
    uint count = 0;
    
    for (uint i=0; i<notes.length; i++){
      if(noteToOwner[i] == msg.sender && notes[i].isDeleted == false){
        temp[count] = notes[i];
        count ++;
      }
    }
    Note[] memory res = new Note[](count);
    
    for (uint i=0; i<count; i++){
      res[i] = temp[i];
    }

    return res;
  }

  function deleteNote(uint noteId, bool isDeleted) external{
    if(noteToOwner[noteId] == msg.sender){
      notes[noteId].isDeleted = isDeleted;
      emit DeleteNote(noteId, isDeleted);
    }
  }
}

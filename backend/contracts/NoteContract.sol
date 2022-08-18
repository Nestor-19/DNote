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
}

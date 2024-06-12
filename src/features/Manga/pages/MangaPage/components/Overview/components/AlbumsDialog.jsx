import React from 'react'
import {Dialog, DialogContent, DialogTitle} from '@mui/material'

const AlbumsDialog = (props) => {
  return (
    <Dialog open = {props.isOpen} onClose = {props.handleClose}>
      <DialogTitle>
        My Title
      </DialogTitle>

      <DialogContent>
          <input type="search" id="default-search" className="block w-2/5 p-3 ps-10 text-sm transition-all text-gray-900 border focus:border-red-500 rounded-3xl bg-gray-100 focus:ring-2 focus:ring-red-500" placeholder="Search Mockups, Logos..." required />
          {props.albumList.map((album, index) => {
            const color = (album.isListed ? 'bg-korone-skin-dark' : 'bg-korone-skin-light');
            // console.log(album.name);
            return (
              <div className = {`px-8 py-2 border rounded-lg cursor-pointer transition-all duration-200 hover:opacity-70 ${color}`}>{album.name}</div>
            );
          })}
      </DialogContent>
    </Dialog>
  )
}

export default AlbumsDialog
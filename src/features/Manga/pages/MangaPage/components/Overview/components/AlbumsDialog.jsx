import React from 'react'
import {Dialog, DialogContent, DialogTitle} from '@mui/material'

const AlbumsDialog = (props) => {
  return (
    <Dialog open = {props.isOpen} onClose = {props.handleClose}>
      <DialogTitle>
        My Title
      </DialogTitle>

      <DialogContent>
        My Content
      </DialogContent>
    </Dialog>
  )
}

export default AlbumsDialog
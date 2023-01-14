import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch, useAppSelector } from '../../store'
import { empty } from '../../features/productsSlice'
import { closeModal } from '../../features/modalSlice'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 2,
};
type Props = {}

const BagModal = (props: Props) => {
    const { product, modalOpen } = useAppSelector((state) => state.modal)
    const dispatch = useAppDispatch()
    const close = () => {
        dispatch(closeModal())
    }
    const emptyBasket = () => {
        if(!product) return
        dispatch(empty(product.id))
        dispatch(closeModal())
    }
    return (
            <Modal
                open={modalOpen}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} onClick={close}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton aria-label="delete">
                            <ClearIcon />
                        </IconButton>

                    </Box>

                    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', height: 150, border: 'none', mb: 2 }}>
                        <img
                            style={{ height: "100%" }}
                            src={product?.photo}
                            alt={"logo"}
                        />
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Ürünü sepetten çıkarmak istediğinize emin misiniz ?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={emptyBasket} color="error" variant="contained" startIcon={< DeleteIcon />}>
                            SİL
                        </Button>
                        <Button sx={{ ml: 1 }} variant="outlined">İptal</Button>
                    </Box>
                </Box>
            </Modal>
    )
}

export default BagModal
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ title, activeStatus, endDate, onDelete, onUpdate }: TodoProps) => {
    return (
        <Box sx={{ width: 400, m: 2, maxWidth: '90%' }} >
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        End Date: {endDate}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Button size="small" onClick={onUpdate} disabled={!activeStatus}>{activeStatus ? 'Complete' : 'Completed'}</Button>
                    <IconButton aria-label="delete" onClick={onDelete}>
                        <DeleteIcon color='error' />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    );
};

interface TodoProps extends Todo {
    onDelete: () => void;
    onUpdate: () => void;
}

export default Todo;
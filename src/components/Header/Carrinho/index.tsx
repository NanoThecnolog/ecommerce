

import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function Carrinho() {
    const [amount, setAmount] = useState<number>()

    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={amount} color="secondary">
                <FaShoppingCart />
            </StyledBadge>
        </IconButton>
    );
}
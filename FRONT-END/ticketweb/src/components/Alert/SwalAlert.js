import Swal from 'sweetalert2'
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import React from 'react';

const override = css`
display: block;
margin: 0 auto;
border-color: red;
position : relative;
top: 300px;
z-index: 10
`;
export const SwalAlert = (type, alertInfo, message) => {
    Swal.fire(
        alertInfo,
        message,
        type
      )
}
export const showLoading = (status) => (
  <ClipLoader
  css={override}
  sizeUnit={"px"}
  size={68}
  color={'#123abc'}
  loading={status}
/>
)
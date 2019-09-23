import Swal from 'sweetalert2'
export const SwalAlert = (type, alertInfo, message) => {
    Swal.fire(
        alertInfo,
        message,
        type
      )
}
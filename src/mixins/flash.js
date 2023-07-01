import swal from 'sweetalert';

export default {
  methods: {
    flash(title, message, level = 'success') {
      swal(title, message, level);
    }
  }
}
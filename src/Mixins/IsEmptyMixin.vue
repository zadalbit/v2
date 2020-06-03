<script>
    export default {
      methods: {
        isEmpty(variable) {
            if (variable === undefined) {
                return true;
            } else if (variable === null) {
                return true;
            } else {
                return false;
            }
        }
      }
    };
</script>
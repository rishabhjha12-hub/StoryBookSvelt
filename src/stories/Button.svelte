<script>
  export let backgroundColor = 'blue';
  export let width = '100px';
  export let height = '40px';
  export let borderRadius = '4px';
  export let textColor = 'white'; // Added text color prop
  
  export let text = 'default';
</script>

<button style="background-color: {backgroundColor}; width: {width}; height: {height}; border-radius: {borderRadius}; color: {textColor}">
  {text}
</button>

<style>
  button {
    /* Add any default button styles here */
    /* For example: padding, font-size, etc. */
  }
</style>

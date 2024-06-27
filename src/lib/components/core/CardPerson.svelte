<script>
    // No additional script needed for now
  </script>
  
  <style>
    .card {
      display: flex;
      flex-direction: column;
      border: solid;
      border-radius: 12px;
      margin: 2%;
      padding: 5%;
      justify-content: space-between;
      align-items: center;
      width: fit-content;
      text-align: center;
    }
  </style>
  
  <div class="card">
    <slot></slot>
  </div>
  
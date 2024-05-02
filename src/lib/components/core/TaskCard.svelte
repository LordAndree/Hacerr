<script>
    export let task;
</script>
    <style>
        .taskcard{
            border: solid;
            background-color: #515173;
            border-radius: 10%;
            flex-direction: column;
            justify-content: space-around;
            width: 90%;
            margin: 1%;
            height: fit-content;
            padding: inherit;
        }
        .titletask{
            width: auto;
            justify-content: space-between;
            flex-direction: row;
            display:  flex;
        }
        .optbutton{
            width: auto;
            height: max-content;
            border: #515173;
            margin-top: 5%;
            padding: 1%;
            background-color: transparent;
        }
        
    </style>

<div class="taskcard">
    <div class="titletask">
        <h1>{task.title}</h1>
        <button class="optbutton">Option</button>
    </div>
    <p>{task.description}</p>
</div>





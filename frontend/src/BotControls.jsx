import React from "react";

export default function BotControls(){

const startBot=()=>{
fetch('/api/start',{
method:'POST'
})
}

const stopBot=()=>{
fetch('/api/stop',{
method:'POST'
})
}

return(
<div>
<h2>Bot Controls</h2>

<button onClick={startBot}>
Start Bot
</button>

<button onClick={stopBot}>
Stop Bot
</button>

</div>
)

}

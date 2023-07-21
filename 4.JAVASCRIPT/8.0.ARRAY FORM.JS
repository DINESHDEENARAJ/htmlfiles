
let studentdata=["deena","dinesh","rohith","gr","dishanth"]

var inserting=()=>
{
    let temp=document.getElementById('users')
    studentdata.push(temp.value);
    alert("your value is successfully"+temp.value)
}


let update=()=>
{
    let index=document.getElementById('users').value
    const newone=prompt("tell us value you want update/replace"+studentdata[index])
    studentdata[index]=newone;
}


// viewpoint or list. empty "" for any insert of values.

let viewpoint=()=>
{
    let hello="";
    studentdata.map((data)=>
    {
      hello+="<tr><td>"+data+"</tr></td>"  
    })
    const performance=document.getElementById('live');
    performance.innerHTML="<table align='center' style='padding:10px 10px 5px 10px; box-shadow:5px 6px 4px pink;'><thead><tr><th>student names</th></tr></thead><tbody>"+hello+"</tbody></table>"
    
}


var deleting=()=>
{
    let temp=document.getElementById('users').value
    // filter means index,position match seithu athula irunthu new name tharapo antha name ha data oda compare panni fitler seithu display agum.
    studentdata=studentdata.filter((data)=>
    {
        return data!==temp;
    })

    alert('value is deleted')
}

// it means as innerHTML base.
//查询操作
function query(str) {
    const map={
        'name':'姓名',
        'id':'学号',
        'age':'年龄',
        'gender':'性别',
        'occupation':'职业'
    }
    var value=$("#"+"query"+str).val();
    if(isEmpty(value)) {
        alert("请输入要查询的"+map[str]);
    }else {
        $("#box3").empty();   //清空上次查找后显示的内容
        fetch("http://localhost:3004/info")
        .then((res) => res.json())
        .then(data => {
            let output = '';
            data.forEach((user) => {
                if(user[str]==value) {
                    output += `<tr class="trs">
                    <td>${user.name}</td>
                    <td>${user.id}</td>
                    <td>${user.age}</td>
                    <td>${user.gender}</td>
                    <td>${user.occupation}</td>
                    </tr>`;
                }
            })
            if(isEmpty(output)) {
                alert("该信息不存在!!");
                //$("#queryname").val()="";
            }else {
                let html;
                html+=`<tr id="tr2">
                <td>${"姓名"}</td>
                <td>${"学号"}</td>
                <td>${"年龄"}</td>
                <td>${"性别"}</td>
                <td>${"职业"}</td>
                </tr>`;
                $("#box3").append(html);
                document.getElementById("box3").innerHTML += output;
                alert("查询成功");
            } 
        }).catch(err => console.log(err));
    }
}

//按照姓名查询
function queryname() {
    query("name");
}

//按照学号查询
function queryid() {
    query("id");
}

//按照年龄查询
function queryage() {
    query("age");
}

//按照学号查询
function querygender() {
    query("gender");
}

//按照职业查询
function queryoccu() {
    query("occupation");
}
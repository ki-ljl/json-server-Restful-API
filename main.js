function isEmpty(string) {
    if(string == null || string == undefined || string == "") {
        return true;
    }else {
        return false;
    }
}

//获取json信息并显示在表格上
function getinfo(string) {
    $.ajax({
        url: "http://localhost:3004/info",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var i;
            var html="";//用一个变量来存储json中的数据
            for (i = 0; i < data.length; i++) { //用for循环遍历数组将数据存入html变量中
                if(isEmpty(data[i].name||isEmpty(data[i].id))||isEmpty(data[i].age)||isEmpty(data[i].gender)||isEmpty(data[i].occupation)) {
                }else {
                    html += `<tr class="trs">
                        <td>${data[i].name}</td>
                        <td>${data[i].id}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].gender}</td>
                        <td>${data[i].occupation}</td>
                        </tr>`;
                } 
            }
            document.getElementById(string).innerHTML += html;
        },
        error: function () {
            alert("数据申请失败");
        }
    })
}

function add() {
    var name=$("#name").val();
    var id=$("#num").val();
    var age=$("#age").val();
    var gender=$("input[name='rd']:checked").val();
    var occu=$("#occupation").find("option:selected").text();
    var re=/^[1-9]+[0-9]*]*$/;   //正则表达式判断输入的是否为正整数
    if(isEmpty(name) || isEmpty(id) || isEmpty(age) || isEmpty(gender) || isEmpty(occu)) {
        alert("请填写完整信息!");
    }else if(!re.test(id)) {
        alert("学号一栏请输入正整数！");
    }else if(!re.test(age)) {
        alert("年龄一栏请输入正整数！");
    }else {
        var newData = {    //要添加的数据
            "name": name,
            "id": id,
            "age": age,
            "gender": gender,
            "occupation": occu
        };
        $.ajax({   //发送到json
            url: "http://localhost:3004/info",
            type: "POST",
            dataType: "json",
            data: newData,
            success: function(data) {
                alert("数据添加成功!");
                //发送之后在网页上显示出来
                getinfo("box1");
            },
            error: function () {
                alert("数据添加失败，该学号用户已经存在!");
            }
        })
        
    }
    
}



function Delete() {
    var id=$("#content").val();   //要删除信息的学号
    $.ajax({
        type: "GET",
        url: "http://localhost:3004/info/"+id,
        dataType: "json",
        success: function(e) {
            $.ajax({
                type: "DELETE",
                url: "http://localhost:3004/info/"+id,
                dataType: "json",
                success:function(data) {
                    alert("删除成功！");
                    getinfo("box2");  //删除成功后重新请求json数据并显示在表格上
                },
                error: function(data) {
                    alert("删除异常");
                }
            })
        },
        error: function(e) {
            alert("该数据不存在，无法删除");
        }
    })
}


function upquery() {
    var id=$("#numup").val();
    if(isEmpty(id)) {
        alert("请先输入要修改数据的学号!!");
    }else {
        $.ajax({
            type: "GET",
            url: "http://localhost:3004/info/"+id,
            dataType: "json",
            success: function(data) {    //该信息存在就先显示出来方便修改
                $("#nameup").val(data.name);
                $("#numup").val(data.id);
                $("#ageup").val(data.age);
                if(data.gender=="男") {
                    $("#1").prop("checked",'checked');
                }else {
                    $("#2").prop("checked",'chaecked');
                }
                $("#occupationup").val(data.occupation);
            },
            error:function(err) {
                alert("该用户不存在，不能修改，请重新输入学号!!");
            }
        })
    }
}


function update() {     //用户修改完成后开始更新
    var name=$("#nameup").val();
    var id=$("#numup").val();
    var age=$("#ageup").val();
    var gender=$("input[name='rdup']:checked").val();
    var occu=$("#occupationup").val();
    var re=/^[1-9]+[0-9]*]*$/;   //正则表达式判断输入的是否为正整数
    if(isEmpty(name) || isEmpty(id) || isEmpty(age) || isEmpty(gender) || isEmpty(occu)) {
        alert("请填写完整信息!");
    }else if(!re.test(id)) {
        alert("学号一栏请输入正整数！");
    }else if(!re.test(age)) {
        alert("年龄一栏请输入正整数！");
    }else {
        var updatedata = {    //要添加的数据
            "name": name,
            "id": id,
            "age": age,
            "gender": gender,
            "occupation": occu
        };
        $.ajax({
            type: "PUT",
            url: "http://localhost:3004/info/"+id,
            data: updatedata,
            success: function(data) {
                alert("修改成功!!");
            },
            error: function(err) {
                alert(err);
            }
        })
    }
}
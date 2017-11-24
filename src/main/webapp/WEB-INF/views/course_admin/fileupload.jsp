<%--
  Created by IntelliJ IDEA.
  User: sun
  Date: 2017/9/8
  Time: 11:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<div align="center">
    <h1>上传附件</h1>
    <form method="post" action="/doUpload" enctype="multipart/form-data">
        <input type="file" name="file"/>
        <input type="submit"/>
    </form>
</div>
</body>
</html>

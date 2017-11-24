<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java"
         isELIgnored="false" pageEncoding="UTF-8" %>
<html lang="en">
<head>
  <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>高铁制造过程智能分析系统</title>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/bootstrap/css/bootstrap.min.css" media="screen">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/bootstrap/css/bootstrap-datetimepicker.min.css" media="screen">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/dist/css/AdminLTE.min.css">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/dist/css/skins/_all-skins.min.css">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/css/jquery-ui.css">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/css/show_page.css">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/css/submenu.css">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/css/main.css">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/css/style.css">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/css/font-awesome.css">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/faltUI/css/flat-ui.css">
  <link rel="stylesheet" href="<%=request.getContextPath()%>/static/css/nav.css">
</head>
<body onload="getProcessCycle()" class="hold-transition skin-blue sidebar-mini"  style="overflow: scroll">
<%@include file="include.jsp"%>
</body>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/jQuery/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/faltUI/js/jquery.dropkick-1.0.0.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/jQuery/jquery-ui.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/bootstrap/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/bootstrap/js/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/d3/d3.v3.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/Echart/echarts.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/Echart/echarts-gl.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/Echart/theme/dark.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/Echart/simplex-noise.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/processCycleSelector.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/drag.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/updown.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/dist/js/app.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/processJS/processCycle.js"></script>
</html>
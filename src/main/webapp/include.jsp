<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabel" style="color: red">
                </h4>
            </div>
            <div class="modal-body table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ORDER_HEADER</th>
                            <th>ORDER_LINE</th>
                            <th>PROCESS_ID</th>
                            <th>PROCESS_NAME</th>
                            <th>PROJECT_NAME </th>
                            <th>WBS</th>
                            <th>PRODUCT_NAME</th>
                            <th>TRAIN_NUMBER</th>
                            <th>CARRIAGE_NUMBER</th>
                            <th>CARRIAGE_TYPE</th>
                            <th>OP_START</th>
                            <th>OP_END</th>
                            <th>PROCESS_CYCLE</th>
                            <th>MANU_CYCLE</th>
                            <th>TEAM_ID</th>
                            <th>WORKER_NUM </th>
                        </tr>
                    <thead>
                    <tbody id="motai">
                    </tbody>
                </table>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button type="button" class="btn btn-primary">
                    提交更改
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
<div>
    <%--蓝色-header--%>
    <header class="main-header">
        <a href="#" class="logo">
            <span class="logo-mini"><b>可视化分析</b></span>
            <span class="logo-lg"><b>高铁制造过程</b>数据可视化分析系统</span>
        </a>
        <%--左侧菜单栏控制--%>
        <nav class="navbar navbar-static-top">
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only"></span>
            </a>
        </nav>
    </header>
    <%--左侧侧边栏--%>
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="<%=request.getContextPath()%>/static/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>管理员</p>
                    <a href="#"><i class="fa fa-circle text-success"></i> </a>
                </div>
            </div>
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu">
                <li class="header">主机</li>
                <li class="active treeview">
                    <a href="#">
                        <i class="fa fa-dashboard"></i> <span>产线健康状态智能分析</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li <%--class="active"--%>><a href="<%=request.getContextPath()%>/index.jsp" class="pnp4icinga"><i class="fa fa-circle-o"></i>工艺周期与制造周期数据分析</a></li>
                        <li><a href="<%=request.getContextPath()%>/jobSize.jsp"><i class="fa fa-circle-o"></i>作业人数分析</a></li>
                        <li><a href="<%=request.getContextPath()%>/workingHours.jsp"><i class="fa fa-circle-o"></i>实动工时和定额工时分析</a></li>
                        <%--<li><a href="index2.html"><i class="fa fa-circle-o"></i> 改呀3</a></li>--%>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-dashboard"></i> <span>数据管理(开发中)</span></a></li>
                <li><a href="#"><i class="fa fa-dashboard"></i> <span>数据建模(开发中)</span></a></li>
                <li><a href="#"><i class="fa fa-dashboard"></i> <span>系统管理(开发中)</span></a></li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>
    <%--主体内容--%>
    <div class="content-wrapper">
        <%-- 系统名称 --%>
        <!-- Main content -->
        <section class="content container-fluid" id="main_section" >
            <div class="row" id="chart_section">
                <!-- Left col -->
                <section  class="col-md-12">
                    <div class="row">
                        <%--时间选择框--%>
                        <div id="select-form" class="select-form">
                            <label for="dtp_input2" class="select-label control-label">开始时间</label>
                            <div id="start" class="input-group date form_date col-md-2 select-div"  data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd" style="float: left; width: 17%;">
                                <input class="select-control" id="startTime" size="16" type="text" value="${startTime}">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                            </div>
                            <input type="hidden" id="dtp_input2" value="" />
                            <label for="dtp_input2" class="select-label control-label">结束时间</label>
                            <div id="end" class="input-group date form_date col-md-2 select-div"  data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd" style="float: left; width: 17% ">
                                <input class="select-control" id="endTime" size="16" type="text" value="${endTime}">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                            </div>
                            <%--条件选择框--%>
                            <select value="车间" id="selector1" class="span3 selector" tabindex="1" name="herolist" style="display: none;">
                                <option value="0" selected="selected">选择车间</option>
                            </select>
                            <select value="车型" id="selector2" class="span3 selector" tabindex="1" name="herolist" style="display: none;">
                                <option value="0" selected="selected">选择车型</option>
                            </select>
                            <div id="search">
                                <i id="search_icon" class="fa fa-search search_icon" aria-hidden="true" style="font-size: 26px"></i>
                            </div>
                        </div>
                            <%--工序搜索框--%>
                            <div id = "search_input" class="col-md-5 search invisable">
                                <label for="input">
                                    <i class="fa fa-search search_icon" aria-hidden="true" style="font-size: 26px; "></i>
                                    <span class="search_label">搜索工序</span>
                                </label>
                                <input id="input" type="text" placeholder="输入工序名称">
                                <i id="close" class="fa fa-times search_icon" aria-hidden="true" style="font-size: 27px"></i>
                            </div>

                            <div class="col-lg-1" >
                                <button id="change">过滤</button>
                            </div>
                        <div class="chart col-lg-12" id="main_div" >
                            <div id="main" class="drag" ondrop="doNothing(event)" draggable="true" ></div>
                        </div>
                        <div class="chart col-xs-12" id="main_div2" >
                            <div class="widget-title">
                                <h4><i class="icon-reorder"></i>图例</h4>
                                <span class="tools">
                                   <a href="javascript:;" class="fa fa-chevron-down"></a>
				                </span>
                            </div>
                            <div  class="col-md-12 col-xs-12 row2" id="div2" >
                                <div id="main1" class="drag chart-body" ondrop="doNothing(event)" draggable="true"></div>
                            </div>
                            <%--<div  class="col-md-5 col-xs-12 row2" id="div3" >--%>
                            <%--<div id="main2" class="drag chart-body" ondrop="doNothing(event)" draggable="true"></div>--%>
                            <%--</div>--%>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>
</div>

<div id="tab-control-sidebar"></div>
</html>

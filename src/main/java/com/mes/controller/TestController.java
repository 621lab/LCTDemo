//package com.mes.controller;
//
//import org.apache.commons.io.FileUtils;
//import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.propertyeditors.CustomDateEditor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.WebDataBinder;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import javax.servlet.http.HttpServletRequest;
//import java.io.File;
//import java.io.IOException;
//import java.text.SimpleDateFormat;
//import java.util.Date;
//import java.util.Map;
//
//
//@Controller
//@RequestMapping("/")
//public class TestController {
//
//    private static Logger logger = LoggerFactory.getLogger(TestController.class);
//
//
//    private UserService userService;
//
//   //by type,@Resources by name
//    @Autowired
//    public void setUserService(UserService userService) {
//        this.userService = userService;
//    }
//
//    //传统url:/test3?age=13
//    @RequestMapping("/test1")
//    @ResponseBody
//    public String baseType(@RequestParam("age") int age,Model model){
//        logger.debug("In viewCourse,age={}",age);
//        model.addAttribute("age",age);
//        return "course_view";
//    }
//    //restfulurl:/test2/{age}
//    @RequestMapping(value = "/test2/{age}")
//    @ResponseBody
//    public String baseType2(@PathVariable("age") int age,Map<String,Object> model){
//        logger.debug("In viewCourse,age={}",age);
//        model.put("age",age);
//        return "course_view";
//    }
//    //传统url:/test3?age=13
//    @RequestMapping("/test3")
//    public String test3(HttpServletRequest request){
//        Integer age = Integer.valueOf(request.getParameter("age"));
//        logger.debug("In viewCourse3,age={}",age);
//        request.setAttribute("age",age);
//        return "course_view";
//    }
//
//    @RequestMapping("/test2")
//    @ResponseBody
//    public String array(String[] name){
//        StringBuffer sdf = new StringBuffer();
//        for(String item:name){
//            sdf.append(item).append(" ");
//        }
//        return sdf.toString();
//    }
//    //类型转换，继承实现PropertyEditor的类PropertyEditorSupport
//    @RequestMapping("userList")
//    @ResponseBody
//    public String list(UserForm users){
//        return users.toString();
//    }
//    @RequestMapping(value = "json")
//    @ResponseBody
//    public String json(@RequestBody User user){
//        return user.toString();
//    }
//
//    @RequestMapping(value = "data1")
//    @ResponseBody
//    public String date1(Date date1){
//        return date1.toString();
//    }
//    @InitBinder("data1")
//    public void initDate1(WebDataBinder biner){
//        biner.registerCustomEditor(Date.class,new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd"),true));
//    }
//    @InitBinder("user")
//    public void initUser(WebDataBinder binder){
//        binder.setFieldDefaultPrefix("user.");
//    }
//    @InitBinder("admin")
//    public void initAdmin(WebDataBinder binder){
//        binder.setFieldDefaultPrefix("admin.");
//    }
//
//    //模型对象获取1
//    @RequestMapping(value = "/save1", method = RequestMethod.POST)
//    public String doSave1(User user){
//          //数据库持久化操作
//          //ReflectionToStringBuilder可以将对象转换成string
//        logger.debug(ReflectionToStringBuilder.toString(user));
//        user.setAge(23);
//        return "redirect:view2/"+user.getAge();
//    }
//
//    //跳转到edit页面
//    @RequestMapping(value = "/save2", method = RequestMethod.POST,params = "add")
//    public String createCourse(){
//        return "course_admin/edit";
//        //return "forward:view2/"+user.getAge();
//    }
//
//    //跳转到fileUpload页面
//    @RequestMapping(value = "/upload", method = RequestMethod.GET)
//    public String doUpload(){
//        return "course_admin/fileupload";
//        //return "forward:view2/"+user.getAge();
//    }
//    //点击提交完成文件上载，并且跳转到success.jsp
//    @RequestMapping(value = "/doUpload", method = RequestMethod.POST)
//    public String doUploadFile(@RequestParam("file") MultipartFile file,HttpServletRequest request) throws IOException {
//        if (!file.isEmpty()) {
//            logger.debug("Process file:{}", file.getOriginalFilename());
//            //得到项目部署到服务器上的真实地址
//            String path = request.getServletContext().getRealPath("/WEB-INF/upload");
//            FileUtils.copyInputStreamToFile(file.getInputStream(),new File(path,System.currentTimeMillis()+file.getOriginalFilename()));
//        }
//        return "success";
////    }
//
//    //模型对象获取2
//    @RequestMapping(value = "/save2", method = RequestMethod.POST)
//    public String doSave2(@ModelAttribute User user){
//          //数据库持久化操作
//         //ReflectionToStringBuilder可以将对象转换成string
//        logger.debug(ReflectionToStringBuilder.toString(user));
//        user.setAge(23);
//        return "redirect:view2/"+user.getAge();
//        //return "forward:view2/"+user.getAge();
//    }
////    //json对象
////    @RequestMapping(value = "/{age}",method = RequestMethod.GET)
////    public @ResponseBody User getUserInJson(@PathVariable Integer age){
////         return "";
////    }
////    将模型数据包裹在responseEntity当中，不用使用responseBody，向浏览器返回一个就送数据
////      requestBody
//    @RequestMapping(value = "/jsontype/{age}",method = RequestMethod.GET)
//    public ResponseEntity<User> getUserInJson2(@PathVariable Integer age){
//        User user = userService.getUserByAge(age);
//        return new ResponseEntity<User>(user, HttpStatus.OK);
//    }
//
//
//
//
//
//
//
//}

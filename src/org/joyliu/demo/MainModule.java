package org.joyliu.demo;

import org.joyliu.demo.module.UserModule;
import org.joyliu.demo.setup.AppSetup;
import org.nutz.mvc.annotation.Encoding;
import org.nutz.mvc.annotation.Fail;
import org.nutz.mvc.annotation.IocBy;
import org.nutz.mvc.annotation.Localization;
import org.nutz.mvc.annotation.Modules;
import org.nutz.mvc.annotation.SetupBy;
import org.nutz.mvc.ioc.provider.JsonIocProvider;

/**
 * <p>功能描述 ： </p>
 * 
 * @author:Vincent(vincentwong@joyliu.org)
 */
@IocBy(type=JsonIocProvider.class,args={"*org.nutz.ioc.loader.json.JsonLoader","ioc/"})
@Encoding(input="utf8",output="utf8")
@Modules({UserModule.class})
@SetupBy(AppSetup.class)
@Localization("i18n")
@Fail("json")
public class MainModule {

}

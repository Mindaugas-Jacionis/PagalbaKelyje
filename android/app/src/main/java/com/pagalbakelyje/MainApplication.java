package com.pagalbakelyje;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.reactnativenavigation.NavigationApplication;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
  public void onCreate() {
    super.onCreate();
  }

  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
    );
  }

}

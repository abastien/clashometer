package com.clashometer;

/**
 * react-native-screens package configuration
 * @see https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-a-bare-react-native-project
 */
import android.os.Bundle;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * react-native-screens package configuration
   * @see https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-a-bare-react-native-project
   */
  @Override
    protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "clashometer";
  }
}

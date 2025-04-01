package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_Insurance_Screen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class Arm_Insurance_Screen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($PolicyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.Arm_Insurance_Screen, SECTION_WIDGET_CLASS).setVariables(false, {$PolicyPeriod})
  }
  
  function refreshVariables ($PolicyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.Arm_Insurance_Screen, SECTION_WIDGET_CLASS).setVariables(true, {$PolicyPeriod})
  }
  
  
}
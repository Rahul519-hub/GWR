package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class Argo_InsuranceScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyperiod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.Argo_InsuranceScreen, SECTION_WIDGET_CLASS).setVariables(false, {$policyperiod})
  }
  
  function refreshVariables ($policyperiod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.Argo_InsuranceScreen, SECTION_WIDGET_CLASS).setVariables(true, {$policyperiod})
  }
  
  
}
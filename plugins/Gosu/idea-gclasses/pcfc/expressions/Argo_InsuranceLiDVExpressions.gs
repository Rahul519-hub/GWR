package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceLiDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Argo_InsuranceLiDVExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceLiDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Argo_InsuranceLiDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Licensenumber_Input) at Argo_InsuranceLiDV.pcf: line 16, column 41
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgoInsu.Licensenumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Licensestate_Input) at Argo_InsuranceLiDV.pcf: line 26, column 40
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgoInsu.Licensestate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=Licensenumber_Input) at Argo_InsuranceLiDV.pcf: line 16, column 41
    function editable_0 () : java.lang.Boolean {
      return true 
    }
    
    // 'value' attribute on TextInput (id=Licensenumber_Input) at Argo_InsuranceLiDV.pcf: line 16, column 41
    function valueRoot_3 () : java.lang.Object {
      return ArgoInsu
    }
    
    // 'value' attribute on TextInput (id=Licensenumber_Input) at Argo_InsuranceLiDV.pcf: line 16, column 41
    function value_1 () : java.lang.String {
      return ArgoInsu.Licensenumber
    }
    
    // 'value' attribute on TextInput (id=Licensestate_Input) at Argo_InsuranceLiDV.pcf: line 26, column 40
    function value_6 () : java.lang.String {
      return ArgoInsu.Licensestate
    }
    
    property get ArgoInsu () : entity.ArgoInsurancePlans {
      return getRequireValue("ArgoInsu", 0) as entity.ArgoInsurancePlans
    }
    
    property set ArgoInsu ($arg :  entity.ArgoInsurancePlans) {
      setRequireValue("ArgoInsu", 0, $arg)
    }
    
    
  }
  
  
}
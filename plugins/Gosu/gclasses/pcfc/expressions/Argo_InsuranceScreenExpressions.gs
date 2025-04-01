package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Argo_InsuranceScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Argo_InsuranceLDVExpressionsImpl extends Argo_InsuranceScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at Argo_InsuranceScreen.pcf: line 56, column 54
    function def_onEnter_14 (def :  pcf.Argo_InsuranceLiDV) : void {
      def.onEnter(ArgoInsu)
    }
    
    // 'def' attribute on PanelRef at Argo_InsuranceScreen.pcf: line 56, column 54
    function def_refreshVariables_15 (def :  pcf.Argo_InsuranceLiDV) : void {
      def.refreshVariables(ArgoInsu)
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at Argo_InsuranceScreen.pcf: line 41, column 47
    function sortValue_3 (ArgoInsured :  entity.ArgoInsurancePlans) : java.lang.Object {
      return ArgoInsured.City
    }
    
    // 'value' attribute on TextCell (id=Addressline_Cell) at Argo_InsuranceScreen.pcf: line 47, column 54
    function sortValue_4 (ArgoInsured :  entity.ArgoInsurancePlans) : java.lang.Object {
      return ArgoInsured.Addressline
    }
    
    // 'value' attribute on RowIterator at Argo_InsuranceScreen.pcf: line 34, column 57
    function value_13 () : entity.ArgoInsurancePlans[] {
      return policyperiod.Argo_Insurance.ArgoInsurancePlans
    }
    
    property get ArgoInsu () : entity.ArgoInsurancePlans {
      return getCurrentSelection(1) as entity.ArgoInsurancePlans
    }
    
    property set ArgoInsu ($arg :  entity.ArgoInsurancePlans) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Argo_InsuranceScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at Argo_InsuranceScreen.pcf: line 19, column 48
    function def_onEnter_1 (def :  pcf.Argo_InsuranceDV) : void {
      def.onEnter(policyperiod)
    }
    
    // 'def' attribute on PanelRef at Argo_InsuranceScreen.pcf: line 70, column 58
    function def_onEnter_16 (def :  pcf.Argo_InsuranceMODEDV_Actor) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at Argo_InsuranceScreen.pcf: line 70, column 58
    function def_onEnter_18 (def :  pcf.Argo_InsuranceMODEDV_Doctor) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at Argo_InsuranceScreen.pcf: line 70, column 58
    function def_refreshVariables_17 (def :  pcf.Argo_InsuranceMODEDV_Actor) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at Argo_InsuranceScreen.pcf: line 70, column 58
    function def_refreshVariables_19 (def :  pcf.Argo_InsuranceMODEDV_Doctor) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at Argo_InsuranceScreen.pcf: line 19, column 48
    function def_refreshVariables_2 (def :  pcf.Argo_InsuranceDV) : void {
      def.refreshVariables(policyperiod)
    }
    
    // EditButtons at Argo_InsuranceScreen.pcf: line 11, column 21
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'mode' attribute on PanelRef at Argo_InsuranceScreen.pcf: line 70, column 58
    function mode_20 () : java.lang.Object {
      return policyperiod.Argo_Insurance.Argo_Occup
    }
    
    property get policyperiod () : PolicyPeriod {
      return getRequireValue("policyperiod", 0) as PolicyPeriod
    }
    
    property set policyperiod ($arg :  PolicyPeriod) {
      setRequireValue("policyperiod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends Argo_InsuranceLDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Addressline_Cell) at Argo_InsuranceScreen.pcf: line 47, column 54
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgoInsured.Addressline = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at Argo_InsuranceScreen.pcf: line 41, column 47
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgoInsured.City = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at Argo_InsuranceScreen.pcf: line 41, column 47
    function valueRoot_7 () : java.lang.Object {
      return ArgoInsured
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at Argo_InsuranceScreen.pcf: line 41, column 47
    function value_5 () : java.lang.String {
      return ArgoInsured.City
    }
    
    // 'value' attribute on TextCell (id=Addressline_Cell) at Argo_InsuranceScreen.pcf: line 47, column 54
    function value_9 () : java.lang.String {
      return ArgoInsured.Addressline
    }
    
    property get ArgoInsured () : entity.ArgoInsurancePlans {
      return getIteratedValue(2) as entity.ArgoInsurancePlans
    }
    
    
  }
  
  
}
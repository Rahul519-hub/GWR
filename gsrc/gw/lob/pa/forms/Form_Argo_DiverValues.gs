package gw.lob.pa.forms

uses gw.forms.FormInferenceContext
uses gw.forms.generic.AbstractSimpleAvailabilityForm

class Form_Argo_DiverValues extends AbstractSimpleAvailabilityForm {

  override function isAvailable(context: FormInferenceContext,avilableStates : Set<Jurisdiction>) : boolean {
  var ret = false

    if (context.Period.PersonalAutoLineExists and context.Period.PeriodStart.after(ScriptParameters.DriverstartDate))

      return context.Period.PersonalAutoLine.PolicyDrivers.hasMatch(\elt1 -> elt1.DriverInformation)

    return ret


  }


}
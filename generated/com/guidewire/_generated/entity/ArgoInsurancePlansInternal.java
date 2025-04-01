package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ArgoInsurancePlans.eti;ArgoInsurancePlans.eix;ArgoInsurancePlans.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ArgoInsurancePlansInternal extends com.guidewire._generated.entity.EditableInternal {
  /**
   * Gets the value of the Addressline field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressline();
  
  
  /**
   * Gets the value of the Advance field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAdvance();
  
  
  /**
   * Gets the value of the Argo_Insurance field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Argo_Insurance getArgo_Insurance();
  
  
  public gw.pl.persistence.core.Key getArgo_InsuranceID();
  
  
  /**
   * Gets the value of the Basic field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBasic();
  
  
  /**
   * Gets the value of the City field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCity();
  
  
  /**
   * Gets the value of the Licensenumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicensenumber();
  
  
  /**
   * Gets the value of the Licensestate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicensestate();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Standard field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStandard();
  
  
  /**
   * Sets the value of the Addressline field.
   */
  public void setAddressline(java.lang.String value);
  
  
  /**
   * Sets the value of the Advance field.
   */
  public void setAdvance(java.lang.String value);
  
  
  /**
   * Sets the value of the Argo_Insurance field.
   */
  public void setArgo_Insurance(entity.Argo_Insurance value);
  
  
  public void setArgo_InsuranceID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Basic field.
   */
  public void setBasic(java.lang.String value);
  
  
  /**
   * Sets the value of the City field.
   */
  public void setCity(java.lang.String value);
  
  
  /**
   * Sets the value of the Licensenumber field.
   */
  public void setLicensenumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Licensestate field.
   */
  public void setLicensestate(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Standard field.
   */
  public void setStandard(java.lang.String value);
  
  
  
}
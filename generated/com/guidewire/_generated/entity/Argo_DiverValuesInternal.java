package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Argo_DiverValues.eti;Argo_DiverValues.eix;Argo_DiverValues.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface Argo_DiverValuesInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Argo_DiverValues getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the DriverCellPhone field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDriverCellPhone();
  
  
  /**
   * Gets the value of the DriverScoreValue field.
   * DriverScorevalue
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDriverScoreValue();
  
  
  /**
   * Gets the value of the DriverStartDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDriverStartDate();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Argo_DiverValues getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the UsedCarMileage field.
   * DriverUsedCarMileage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getUsedCarMileage();
  
  
  /**
   * Gets the value of the DriverOverride_T field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDriverOverride_T();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.Argo_DiverValues value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DriverCellPhone field.
   */
  public void setDriverCellPhone(java.lang.String value);
  
  
  /**
   * Sets the value of the DriverOverride_T field.
   */
  public void setDriverOverride_T(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DriverScoreValue field.
   */
  public void setDriverScoreValue(java.util.Date value);
  
  
  /**
   * Sets the value of the DriverStartDate field.
   */
  public void setDriverStartDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.Argo_DiverValues value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the UsedCarMileage field.
   */
  public void setUsedCarMileage(java.lang.Integer value);
  
  
  
}
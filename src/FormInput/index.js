import React, { Component } from 'react'
import {
  Input,
} from 'antd';
import { omit, equals } from 'ramda';
 
import './styles.css'

export default class FormInput extends Component {
  shouldComponentUpdate(nextProp){
    const previous = omit(['onChange'], nextProp)
    const next = omit(['onChange'], this.props)
    return !equals(previous, next);
  }

  render = () => {
    const {
      label,
      children,
      error,
      name,
      type = "text",
      onChange,
      value,
    } = this.props

    const inputProps = { name, onChange, value, type };
    return (<div className="form-input">
      <div className='form-input-label'>
        <label className='input-label'>{label}</label>
      </div>
      {children ? React.cloneElement(children, inputProps) : <Input {...inputProps}/>}
      <div className="form-input-error">
        {error}
      </div>
    </div>)
  }
}
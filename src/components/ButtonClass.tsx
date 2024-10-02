import React, { Component } from 'react';

interface ButtonProps {
  label: string;
  color?: string;
}

class ButtonClass extends Component<ButtonProps> {
  static defaultProps = {
    color: 'green',
  };

  render() {
    const { label, color } = this.props;
    return (
      <button style={{ backgroundColor: color }}>
        {label}
      </button>
    );
  }
}

export default ButtonClass;

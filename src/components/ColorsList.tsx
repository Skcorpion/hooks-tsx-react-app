import React, { FC, PureComponent } from 'react';

export class ColorsList extends PureComponent<{ colors: string[] }> {
  render() {
    const { colors } = this.props;
    console.log('rendering');

    return (
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    );
  }
}

// export const ColorsList: FC<{ colors: string[] }> = ({ colors }) => {
//   console.log('rendering');
//   return (
//     <ul>
//       {colors.map((color, index) => (
//         <li key={index}>{color}</li>
//       ))}
//     </ul>
//   );
// };

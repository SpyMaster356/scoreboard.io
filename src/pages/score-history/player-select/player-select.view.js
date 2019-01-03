import React from 'react';
import {
  SelectField,
  MenuItem,
} from 'material-ui';

export const PlayerSelectView = ({
  players,
  selectedId,

  onPlayerSelect,
}) => (
  <SelectField
    fullWidth={true}
    floatingLabelText="Player"
    value={selectedId}
    onChange={onPlayerSelect}
  >
    {players.map(player => (
      <MenuItem key={player.id} value={player.id} primaryText={player.name} />
    ))}
  </SelectField>
);

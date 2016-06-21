import App from './LifeApp';
import ReactOnRails from 'react-on-rails';

ReactOnRails.setOptions({
  traceTurbolinks: TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register( { App } );

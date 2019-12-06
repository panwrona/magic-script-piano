import 'magic-script-polyfills';
import { process, require } from './global-scope.js'
import React from 'react';
import mxs from 'magic-script-components-lumin';

import HackathonApp from '../src_app/hackathon_app';

mxs.bootstrap(<HackathonApp type='landscape' volumeSize={[1.0, 1.5, 0.5]} />);
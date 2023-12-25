// ref: https://github.com/supabase/supabase/issues/8464#issuecomment-1221448428
import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js';

const supabaseClient = createClient(
  process.env.SUPABASE_STORE_URL || '',
  process.env.SUPABASE_API_KEY || ''
);

export { supabaseClient };

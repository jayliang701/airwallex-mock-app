
import axios from 'axios';

import RequsetInviteForm from '../data/RequsetInviteForm';

export const requestInvite = async (form:RequsetInviteForm):Promise<void> => {
    const url = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

    await axios.post(url, {
        name: form.getFullName(),
        email: form.getEmail(),
    });
}

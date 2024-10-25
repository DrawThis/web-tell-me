import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async () => {
        redirect(302, '/landing-page')
    }
}
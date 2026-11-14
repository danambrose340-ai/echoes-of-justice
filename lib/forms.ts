// Form delivery through the host's built-in form handling (Netlify Forms).
// Each form name here must also be declared in public/__forms.html, which is
// what the host scans at deploy time. Submissions are stored in the site
// dashboard and emailed to the notification address configured there.
export type SiteFormName = 'contact' | 'family-story' | 'due-process-intake' | 'volunteer';

export async function submitSiteForm(
  formName: SiteFormName,
  values: Record<string, string>,
): Promise<boolean> {
  try {
    const response = await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': formName, ...values }).toString(),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export function formValues(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form);
  const values: Record<string, string> = {};
  for (const key of new Set(data.keys())) {
    values[key] = data.getAll(key).map(String).join(', ');
  }
  return values;
}

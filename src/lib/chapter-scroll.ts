export const chapterScroll = 0.69;

function stickyOf(section: HTMLElement) {
  return section.firstElementChild as HTMLElement | null;
}

export function pinOffset(section: HTMLElement) {
  const sticky = stickyOf(section);
  return sticky ? Number.parseFloat(getComputedStyle(sticky).top) || 0 : 0;
}

export function scrollRunway(section: HTMLElement) {
  const sticky = stickyOf(section);
  return sticky ? section.offsetHeight - sticky.offsetHeight : 0;
}

function sectionStart(section: HTMLElement) {
  return (
    section.getBoundingClientRect().top + window.scrollY - pinOffset(section)
  );
}

export function chapterTarget(
  section: HTMLElement,
  index: number,
  count: number,
) {
  return (
    sectionStart(section) + (index + 0.5) * (scrollRunway(section) / count)
  );
}

export function sequenceEnd(section: HTMLElement) {
  return sectionStart(section) + scrollRunway(section);
}

function DateParser(date: string | undefined) {
  if (date === undefined) {
    return null;
  }

  return new Date(date).toDateString();
}

export { DateParser }

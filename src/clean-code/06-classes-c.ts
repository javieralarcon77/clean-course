(() => {
  type Gender = "M" | "F";

  /* usando el principio de responsabilidad unica */
  /* priorizar la composicion frente a la herencia */

  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps extends PersonProps, UserProps, SettingsProps {}

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      birthDate,
      email,
      gender,
      lastOpenFolder,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      this.user = new User({ email, role });
      this.person = new Person({ name, gender, birthDate });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const newUserSettings = new UserSettings({
    workingDirectory: "/user/home",
    lastOpenFolder: "/home",
    email: "alarcon@gmail.com",
    role: "Admin",
    name: "Javier",
    gender: "M",
    birthDate: new Date("1985-10-21"),
  });

  console.log({ newUserSettings });
})();

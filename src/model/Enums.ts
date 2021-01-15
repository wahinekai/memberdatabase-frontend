/**
 * @file Definition of supported countries enum
 */

/**
 * Supported countries
 */
export enum Country {
    UnitedStates = 'United States',
    Canada = 'Canada',
    Default = 'Select a Country',
}

/**
 * Possible skill levels
 */
export enum Level {
    Beginner = 'Beginner',
    Intermediate = 'Intermediate',
    Advanced = 'Advanced',
    Expert = 'Expert',
    Default = 'Select a Level',
}

/**
 * Possible Member Statuses
 */
export enum MemberStatus {
    Pending = 'Pending',
    ActivePaying = 'Active: Paying',
    ActiveNonPaying = 'Active: Non-Paying',
    LifetimeMember = 'Lifetime Member',
    Terminated = 'Terminated',
}

/**
 * Possible entered statuses
 */
export enum ChapterEnteredStatus {
    Entered = 'Entered',
    Pending = 'Pending',
    NotAccepted = 'Not Accepted',
}

/**
 * Possible entered statuses
 */
export enum WkiEnteredStatus {
    NotEntered = 'Not Entered',
    Entered = 'Entered',
    Accepted = 'Accepted',
}

/**
 * Supported chapters
 */
export enum Chapter {
    SanDiego = 'San Diego',
    OrangeCountyLosAngeles = 'Orange County/Los Angeles',
    Ventura = 'Ventura',
    SantaCruzSanFrancisco = 'Santa Cruz/San Francisco',
    Oregon = 'Oregon',
    Washington = 'Washington',
    Hawaii = 'Hawaii',
    NewEngland = 'New England',
    WahineKaiInternational = 'Wahine Kai International',
}

/**
 * Supported leadership positions
 */
export enum Position {
    President = 'President',
    VicePresident = 'Vice President',
    VicePresidentOfEvents = 'Vice President of Events',
    VicePresidentOfFinance = 'Vice President of Finance',
    DirectorOfMarketing = 'Director of Marketing',
    DirectorOfSocialMedia = 'Director of Social Media',
    DirectorOfCommunityServices = 'Director of Community Services',
    ChapterDirector = 'Chapter Director',
    ChapterEventCoordinator = 'Chapter Event Coordinator',
    Default = 'No Leadership Position',
}

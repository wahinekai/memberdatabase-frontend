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
 * Possible entered statuses
 */
export enum EnteredStatus {
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
    Maine = 'Maine',
    Default = 'Select a Chapter',
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

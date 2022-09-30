/**
 * @file Definition of supported countries enum
 */

/**
 * Possible skill levels
 */
export enum Level {
    Default = 'Select a Level',
    Beginner = 'Beginner',
    Intermediate = 'Intermediate',
    Advanced = 'Advanced',
    Expert = 'Expert',
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
export enum EnteredStatus {
    Entered = 'Entered',
    Pending = 'Pending',
    NotAccepted = 'Not Accepted',
    Terminated = 'Terminated',
}

/**
 * Supported chapters
 */
export enum Chapter {
    SanDiego = 'San Diego',
    OrangeCountyLosAngeles = 'Orange County/Los Angeles',
    VenturaSantaBarbara = 'Ventura/Santa Barbara',
    SantaCruzSanFrancisco = 'Santa Cruz/San Francisco',
    Oregon = 'Oregon',
    DelNorteOregon = 'Del Norte Oregon',
    Washington = 'Washington',
    Hawaii = 'Hawaii',
    NewEngland = 'New England',
    NewJersey = 'New Jersey',
    StAugustineFlorida = 'St. Augustine Florida',
    RockawayBeachNewYork = 'Rockaway Beach New York',
    WahineKaiInternational = 'Wahine Kai International',
}

/**
 * Supported leadership positions
 */
export enum Position {
    Default = 'No Leadership Position',
    President = 'President',
    VicePresident = 'Vice President',
    VicePresidentOfEvents = 'Vice President of Events',
    VicePresidentOfFinance = 'Vice President of Finance',
    DirectorOfMarketing = 'Director of Marketing',
    DirectorOfSocialMedia = 'Director of Social Media',
    DirectorOfCommunityServices = 'Director of Community Services',
    SurfMamaDirector = 'Surf Mama Director',
    ChapterDirector = 'Chapter Director',
    ChapterEventCoordinator = 'Chapter Event Coordinator',
    Merchandiser = 'Merchandiser',
}

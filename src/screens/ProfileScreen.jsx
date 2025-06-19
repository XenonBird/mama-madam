import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../globalStyles';

const ProfileScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('stats');

  const profileData = {
    name: 'Raihan',
    avatar: '🦊',
    level: 12,
    totalStars: 45,
    streak: 7,
    completedLessons: 28,
    totalLessons: 50,
    badges: [
      {id: 1, name: 'First Steps', icon: '🎯', earned: true},
      {id: 2, name: 'Star Collector', icon: '⭐', earned: true},
      {id: 3, name: 'Week Warrior', icon: '🔥', earned: true},
      {id: 4, name: 'Math Master', icon: '🔢', earned: false},
      {id: 5, name: 'Reading Hero', icon: '📚', earned: false},
      {id: 6, name: 'Perfect Score', icon: '💯', earned: false},
    ],
    recentActivity: [
      {
        subject: 'Bengali',
        lesson: 'Alphabet Adventure',
        stars: 3,
        date: 'Today',
      },
      {subject: 'Math', lesson: 'Counting Fun', stars: 2, date: 'Yesterday'},
      {
        subject: 'English',
        lesson: 'Word Building',
        stars: 3,
        date: '2 days ago',
      },
    ],
    subjects: [
      {name: 'Bengali', progress: 75, color: colors.red},
      {name: 'English', progress: 60, color: colors.blue},
      {name: 'Math', progress: 45, color: colors.green},
      {name: 'Science', progress: 20, color: colors.yellow},
    ],
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'stats':
        return (
          <View style={styles.contentContainer}>
            {/* Quick Stats */}
            <View style={styles.statsGrid}>
              <StatCard
                icon="📚"
                title="Lessons"
                value={profileData.completedLessons}
                subtitle={`of ${profileData.totalLessons} completed`}
                color={colors.blueDark}
              />
              <StatCard
                icon="⭐"
                title="Total Stars"
                value={profileData.totalStars}
                subtitle="Keep collecting!"
                color={colors.yellowDark}
              />
              <StatCard
                icon="🔥"
                title="Streak"
                value={`${profileData.streak} days`}
                subtitle="Amazing consistency!"
                color={colors.redDark}
              />
              <StatCard
                icon="🎯"
                title="Level"
                value={profileData.level}
                subtitle="Explorer"
                color={colors.greenDark}
              />
            </View>

            {/* Subject Progress */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Subject Progress</Text>
              <View style={styles.subjectProgressContainer}>
                {profileData.subjects.map((subject, index) => (
                  <SubjectProgress key={index} subject={subject} />
                ))}
              </View>
            </View>
          </View>
        );

      case 'badges':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <View style={styles.badgesGrid}>
              {profileData.badges.map(badge => (
                <BadgeItem key={badge.id} badge={badge} />
              ))}
            </View>
          </View>
        );

      case 'activity':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <View style={styles.activityContainer}>
              {profileData.recentActivity.map((activity, index) => (
                <ActivityItem key={index} activity={activity} />
              ))}
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity>
            <MaterialIcons name="settings" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileContent}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatar}>{profileData.avatar}</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Hi! {profileData.name}</Text>
              <Text style={styles.profileLevel}>
                Level {profileData.level} Explorer
              </Text>
              <View style={styles.profileStats}>
                <View style={styles.profileStatItem}>
                  <FontAwesome name="star" size={16} color={colors.yellow} />
                  <Text style={styles.profileStatText}>
                    {profileData.totalStars}
                  </Text>
                </View>
                <View style={styles.profileStatItem}>
                  <Text style={styles.profileStatEmoji}>🔥</Text>
                  <Text style={styles.profileStatText}>
                    {profileData.streak} days
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <View style={styles.tabNavigation}>
          {[
            {id: 'stats', label: 'Stats', icon: '📊'},
            {id: 'badges', label: 'Badges', icon: '🏆'},
            {id: 'activity', label: 'Activity', icon: '📱'},
          ].map(tab => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onPress={() => setActiveTab(tab.id)}
            />
          ))}
        </View>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {renderContent()}

        {/* Bottom CTA */}
        <View style={styles.ctaContainer}>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.ctaText}>Continue Learning! 🚀</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const StatCard = ({icon, title, value, subtitle, color}) => {
  return (
    <View style={[styles.statCard, {borderLeftColor: color}]}>
      <View style={styles.statContent}>
        <View style={styles.statTextContainer}>
          <Text style={styles.statTitle}>{title}</Text>
          <Text style={styles.statValue}>{value}</Text>
          {subtitle && <Text style={styles.statSubtitle}>{subtitle}</Text>}
        </View>
        <Text style={styles.statIcon}>{icon}</Text>
      </View>
    </View>
  );
};

const BadgeItem = ({badge}) => (
  <View
    style={[
      styles.badgeItem,
      badge.earned ? styles.earnedBadge : styles.lockedBadge,
    ]}>
    <Text style={styles.badgeIcon}>{badge.icon}</Text>
    <Text
      style={[
        styles.badgeName,
        badge.earned ? styles.earnedBadgeText : styles.lockedBadgeText,
      ]}>
      {badge.name}
    </Text>
  </View>
);

const ActivityItem = ({activity}) => (
  <View style={styles.activityItem}>
    <View style={styles.activityContent}>
      <View style={styles.activityTextContainer}>
        <Text style={styles.activityLesson}>{activity.lesson}</Text>
        <Text style={styles.activitySubject}>{activity.subject}</Text>
        <Text style={styles.activityDate}>{activity.date}</Text>
      </View>
      <View style={styles.starsContainer}>
        {[1, 2, 3].map(star => (
          <FontAwesome
            key={star}
            name="star"
            size={16}
            color={star <= activity.stars ? colors.yellow : colors.grayLight}
            style={styles.activityStar}
          />
        ))}
      </View>
    </View>
  </View>
);

const SubjectProgress = ({subject}) => (
  <View style={styles.subjectProgressItem}>
    <View style={styles.subjectProgressHeader}>
      <Text style={styles.subjectName}>{subject.name}</Text>
      <Text style={styles.subjectPercentage}>{subject.progress}%</Text>
    </View>
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBar,
          {
            width: `${subject.progress}%`,
            backgroundColor: subject.color,
          },
        ]}
      />
    </View>
  </View>
);

const TabButton = ({tab, isActive, onPress}) => (
  <TouchableOpacity
    style={[styles.tabButton, isActive && styles.activeTabButton]}
    onPress={onPress}>
    <Text style={styles.tabIcon}>{tab.icon}</Text>
    <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
      {tab.label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.purple,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  profileCard: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: 24,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 12,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 64,
    height: 64,
    backgroundColor: colors.orange,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: colors.red,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  avatar: {
    fontSize: 32,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 4,
  },
  profileLevel: {
    fontSize: 16,
    color: colors.grayDark,
    marginBottom: 8,
  },
  profileStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  profileStatEmoji: {
    fontSize: 16,
    marginRight: 4,
  },
  profileStatText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
    marginLeft: 4,
  },
  tabContainer: {
    paddingHorizontal: 16,
    marginTop: -16,
    marginBottom: 24,
  },
  tabNavigation: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 8,
    flexDirection: 'row',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  activeTabButton: {
    backgroundColor: colors.gral,
  },
  tabIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.grayDark,
  },
  activeTabLabel: {
    color: colors.black,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    width: '48%',
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statTextContainer: {
    flex: 1,
  },
  statTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.grayDark,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  statSubtitle: {
    fontSize: 12,
    color: colors.grayLight,
    marginTop: 2,
  },
  statIcon: {
    fontSize: 24,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 16,
  },
  subjectProgressContainer: {
    gap: 12,
  },
  subjectProgressItem: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  subjectProgressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  subjectPercentage: {
    fontSize: 14,
    color: colors.grayDark,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: colors.grayLight,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  badgeItem: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  earnedBadge: {
    backgroundColor: colors.yellowLight,
  },
  lockedBadge: {
    backgroundColor: colors.grayLight,
  },
  badgeIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  badgeName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  earnedBadgeText: {
    color: colors.black,
  },
  lockedBadgeText: {
    color: colors.grayDark,
  },
  activityContainer: {
    gap: 12,
  },
  activityItem: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.grayMedium,
  },
  activityContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityTextContainer: {
    flex: 1,
  },
  activityLesson: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 2,
  },
  activitySubject: {
    fontSize: 14,
    color: colors.grayDark,
    marginBottom: 4,
  },
  activityDate: {
    fontSize: 12,
    color: colors.grayLight,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityStar: {
    marginLeft: 2,
  },
  ctaContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  ctaButton: {
    backgroundColor: colors.yellow,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  ctaText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default ProfileScreen;

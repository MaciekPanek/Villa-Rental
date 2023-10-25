import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // CABIN 001
  {
    created_at: fromToday(-20, true),
    arrivalDate: fromToday(0),
    departureDate: fromToday(7),
    villaId: 1,
    guestId: 2,
    notes:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",

    guestsNum: 1,
  },
  {
    created_at: fromToday(-33, true),
    arrivalDate: fromToday(-23),
    departureDate: fromToday(-13),
    villaId: 1,
    guestId: 3,
    notes: "",
    guestsNum: 2,
  },
  {
    created_at: fromToday(-27, true),
    arrivalDate: fromToday(12),
    departureDate: fromToday(18),
    villaId: 1,
    guestId: 4,
    notes: "",
    guestsNum: 2,
  },

  // CABIN 002
  {
    created_at: fromToday(-45, true),
    arrivalDate: fromToday(-45),
    departureDate: fromToday(-29),
    villaId: 2,
    guestId: 5,
    notes: "",
    guestsNum: 2,
  },
  {
    created_at: fromToday(-2, true),
    arrivalDate: fromToday(15),
    departureDate: fromToday(18),
    villaId: 2,
    guestId: 6,
    notes: "",
    guestsNum: 2,
  },
  {
    created_at: fromToday(-5, true),
    arrivalDate: fromToday(33),
    departureDate: fromToday(48),
    villaId: 2,
    guestId: 7,
    notes: "",
    guestsNum: 2,
  },

  // CABIN 003
  {
    created_at: fromToday(-65, true),
    arrivalDate: fromToday(-25),
    departureDate: fromToday(-20),
    villaId: 3,
    guestId: 8,
    notes: "",
    guestsNum: 4,
  },
  {
    created_at: fromToday(-2, true),
    arrivalDate: fromToday(-2),
    departureDate: fromToday(0),
    villaId: 3,
    guestId: 9,
    notes: "We will be bringing our small dog with us",
    guestsNum: 3,
  },
  {
    created_at: fromToday(-14, true),
    arrivalDate: fromToday(-14),
    departureDate: fromToday(-11),
    villaId: 3,
    guestId: 10,
    notes: "",
    guestsNum: 4,
  },

  // CABIN 004
  {
    created_at: fromToday(-30, true),
    arrivalDate: fromToday(-4),
    departureDate: fromToday(8),
    villaId: 4,
    guestId: 11,
    notes: "",
    guestsNum: 4,
  },
  {
    created_at: fromToday(-1, true),
    arrivalDate: fromToday(12),
    departureDate: fromToday(17),
    villaId: 4,
    guestId: 12,
    notes: "",
    guestsNum: 4,
  },
  {
    created_at: fromToday(-3, true),
    arrivalDate: fromToday(18),
    departureDate: fromToday(19),
    villaId: 4,
    guestId: 13,
    notes: "",
    guestsNum: 1,
  },

  // CABIN 005
  {
    created_at: fromToday(0, true),
    arrivalDate: fromToday(14),
    departureDate: fromToday(21),
    villaId: 5,
    guestId: 14,
    notes: "",
    guestsNum: 5,
  },
  {
    created_at: fromToday(-6, true),
    arrivalDate: fromToday(-6),
    departureDate: fromToday(-4),
    villaId: 5,
    guestId: 15,
    notes: "",
    guestsNum: 4,
  },
  {
    created_at: fromToday(-4, true),
    arrivalDate: fromToday(-4),
    departureDate: fromToday(-1),
    villaId: 5,
    guestId: 16,
    notes: "",
    guestsNum: 6,
  },

  // CABIN 006
  {
    created_at: fromToday(-3, true),
    arrivalDate: fromToday(0),
    departureDate: fromToday(11),
    villaId: 6,
    guestId: 17,
    notes: "We will be checking in late, around midnight. Hope that's okay :)",
    guestsNum: 6,
  },
  {
    created_at: fromToday(-16, true),
    arrivalDate: fromToday(-16),
    departureDate: fromToday(-9),
    villaId: 6,
    guestId: 18,
    notes: "I will need a rollaway bed for one of the guests",
    guestsNum: 4,
  },
  {
    created_at: fromToday(-18, true),
    arrivalDate: fromToday(-4),
    departureDate: fromToday(-1),
    villaId: 6,
    guestId: 19,
    notes: "",
    guestsNum: 6,
  },

  // CABIN 007
  {
    created_at: fromToday(-2, true),
    arrivalDate: fromToday(17),
    departureDate: fromToday(23),
    villaId: 7,
    guestId: 20,
    notes: "",
    guestsNum: 8,
  },
  {
    created_at: fromToday(-7, true),
    arrivalDate: fromToday(40),
    departureDate: fromToday(50),
    villaId: 7,
    guestId: 21,
    notes: "",
    guestsNum: 7,
  },
  {
    created_at: fromToday(-55, true),
    arrivalDate: fromToday(32),
    departureDate: fromToday(37),
    villaId: 7,
    guestId: 22,
    notes: "",
    guestsNum: 6,
  },

  // CABIN 008
  {
    created_at: fromToday(-8, true),
    arrivalDate: fromToday(-5),
    departureDate: fromToday(0),
    villaId: 8,
    guestId: 1,
    notes:
      "My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible",
    guestsNum: 9,
  },
  {
    created_at: fromToday(0, true),
    arrivalDate: fromToday(0),
    departureDate: fromToday(5),
    villaId: 8,
    guestId: 23,
    notes:
      "I am celebrating my anniversary, can you arrange for any special amenities or decorations?",
    guestsNum: 10,
  },
  {
    created_at: fromToday(-10, true),
    arrivalDate: fromToday(10),
    departureDate: fromToday(13),
    villaId: 8,
    guestId: 24,
    notes: "",
    guestsNum: 7,
  },
];

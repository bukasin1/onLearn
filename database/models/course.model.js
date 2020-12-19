const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
  title: { type: String, trim: true, unique: true },
  description: { type: String, trim: true },
  imageUrl: { type: String, default: 'https://placeholder.com/300' },
  instructors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  modules: [
    {
      progress: { type: Number, default: 0 },
      units: [
        {
          title: { type: String, trim: true },
          content: { type: String, trim: true },
          videoUrl: { type: String, trim: true },
          completed: { type: Boolean, default: false },
        },
      ],
    },
  ],
});

module.exports = model('Course', courseSchema);